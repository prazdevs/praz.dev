---
title: Authentication for REST APIs with NestJs and JWT
category: blog
date: 2020-04-19
thumbnail: ../images/nest-auth-api.png
tags: [NestJs, TypeScript, MongoDB]
---

The JavaScript environment may be amazing for frontend work, there are also plenty of solutions for the backend. Express being a really good base, it can quickly become overwhelming to add features to it, while keeping things organized, also I find the TypeScript integration to be lacklustre sometimes. This is where NestJs comes into play. Nest is _"a progressive Node.js framework for building efficient, reliable and scalable server-side applications"_. It runs on Express under the hood but provides great TypeScript integration and native Dependency Injection. NestJs is very opinionated and inspired by Angular.

In this post, we will build a very simple REST API with 3 routes :

- `POST /auth/signup` : public route to sign up
- `POST /auth/signin` : public route to sign in and get a JWT token
- `GET /auth/me` : protected route using JWT token as Bearer

Users will be stored in a MongoDB database, I assume you have basic knowledge of MongoDB and know how to create a database and connect to it. I personnaly use [MongoDB Cloud](https://www.mongodb.com/cloud).

### Creating a Nest project and connecting a database

The NestJs ecosystem provides us with an amazing CLI that we will use a lot while working with Nest. To install it, simply run `yarn global add @nestjs/cli` and it should be installed globally, check it by running `nest -v`.

##### Creating the project

To create a Nest project, we create a directory to work in, and from that directory, we run the command `nest new .`. We then choose `Yarn` as our package manager (or npm if it's your personal preference). And the CLI will automagically bootstrap us a functionnal Nest project. To start the dev server, we just need to run `yarn start:dev`. The dev server works on watch mode, so saving a file will automatically reload the server with our latest changes. By default, the server listens to port 3000, feel free to change it in the `src/main.ts` file. For now, we only have the main App module, which contains a service `app.service.ts` and a controller `app.controller.ts`.

##### Creating an auth module

As mentioned earlier, the CLI is used a lot with NestJs. To add components to our server, we use the `generate` command, simplified `g`. So to add our new auth module, we simply run `nest g mo` : our new module appears in an `auth` folder and is also imported in the App module.
A module can contain :

- `imports` : other modules to be used in the current one
- `controller` : controllers related to the current module
- `providers` : services used by the current module
- `exports` : to expose services outside of the current module

They are defined in the decorator `@Module` as an object containing arrays.

##### Connecting our server to the database

We will connect to our MongoDB database using Mongoose and the connect string. As we always do, for security reasons, we will save our connection string in the environment variables. The equivalent of `dotenv` in Nest is the `Config` module. We simply add it by running `yarn add @nest/config`. Then we create our `.env` file at the root of the project and paste in the connection string with the key `MONGO_URI`.

Then we need to add Mongoose to connect to our database. NestJs provides a module for that. All we need to is add the packages and configure them. First, we run `yarn add @nestjs/mongoose mongoose` then we add some types for Mongoose with `yarn add -D @types/mongoose @types/mongodb`.

We will now configure the main `App` module to access both our `.env` variables and our database.

```ts:title=src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

We won't touch our App module anymore. Now let's move onto the Auth module. We will need an Auth controller and an Auth service. To do so, we just use the CLI with the following commands : `nest g co auth --no-spec` to add the controller and `nest g s auth --no-spec` to add the service. `--no-spec` prevents the creation of test files, we won't be doing unit testing for now, let's keep it simple.

We then add some imports in our Auth module.

```ts:title=src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
```

In the App module, we configured Mongoose for the whole app, while here, we configure it only for our auth, using a `UserSchema`. Let's create that schema right away.

```ts:title=src/auth/schemas/user.schema.ts
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});
```

Even if you're not familiar with MongoDB and Mongoose, this schema is really simple: a user will be defined by his username and his password. We want to keep the username unique so we have to specify that. And we now have a fully functionnal NestJs server connected to a MongoDB database with a working User schema. Now, let's use that schema and allow new users to get into our app.

### Signin & signup

We now want our users to be able to create their account and use it to access protected routes. First things first, we will start with the signup, which should be the easiest part.

##### Signup

To sign-up (and later sign-in), we will request a user to input a username and a password. And we want to validate the inputs so that it matches conditions :

- `username` must be a string, 4-20 characters
- `password` must be a string, 8-20 characters
  Yes, those are arbitrary chosen numbers.

We will use something that you might already be familiar with: a Data Transfer Object or DTO. Not only DTOs allow us to keep the same data structure from the controller to the service, but NestJs also provides validation and transformation (casting a string to an int for instance) through the DTO. We need 2 packages for that, so we run `yarn add class-validator class-transformer`. Let's now create our `AuthCredentialsDto`.

```ts:title=src/auth/dto/auth-credentials.dto.ts
import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;
}
```

As you can see, we take advantages of decorators again. Those will be tested when run through a "Validation Pipe" that we will set up in the controller, don't worry Nest makes it super easy.
Before modifying our service, we will add a well known package to secure our passwords : bcrypt. You don't want to store plain text passwords do you? Just run `yarn add bcrypt` and `yarn add -D @types/bcrypt` for types. On final addition we need before the service is creating a User interface. It will ensure we keep a consistent structure for our User model.

```ts:title=src/auth/interfaces/user.interface.ts
import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly password: string;
}
```

And we can finally modify our service and use everything we built so far.

```ts:title=src/auth/auth.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ username, password: hashedPassword });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }
}
```

We use the Dependecy Injection provided by Nest to inject our Mongoose model in the service, to do so, we simply put the model in the constructor with the decorator provided by the Mongoose module. Then, the rest should be self-explanatory: destructure our credentials, hash the password with bcrypt (be careful not to forget to await the operation), create the model and try to save it.
We catch potential errors and take care of the `11000` error with a particular throw: this error means a unique value already exists in the database. Throwing this exception, Nest will handle the controller response automatically and return a different code with a meaningful error. Speaking of controller, let's move onto it and add the signup route.

```ts:title=src/auth/auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }
}
```

We added the service to the controller thanks to Dependecy Injection through the constructor. We get the credentials from the request body with the decorator `@Body`, adding the `ValidationPipe` parameter runs the verifications we added in the DTO earlier, if it's rejected, the server returns a 400. If the user already exists, the server returns a 409 (conflict) with the message we defined in the service. And that's it, users can now register on the server! We can try running the server and use Postman to make a post request to `localhost:3000/auth/signup` with a username and password in the body (use the x-www-form-urlencoded mode), you should get a 200 and have a new user in your User document collection.

##### Signin

We want our users to be able to access protected routes. For this we'll use JWT or JSON Web Token. Users will post to a route with their username and password, and get a token if they input valid credentials. To do so, we use the `PassportJs` library and its Local strategy. If you're not familiar with PassportJs, i highly recommend reading the [documentation](http://www.passportjs.org/docs/). We will install all the dependencies related to Passport including some we will need later. We run `yarn add @nestjs/jwt @nestjs/passport passport passport-jwt passport-local` and `yarn add -D @types/passport-jwt @types/passport-local` for the types.

Let's start by configuring our auth module to use the new Nest modules we added.

```ts:title=src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schemas/user.schema';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
```

We import the Passport module provided by Nest as well as the Jwt module. Add a new `JWT_SECRET` environment variable (or in your .env file) with a value of your choice, preferably long.
We also added two strategies as providers, let's start by making the local one.

```ts:title=src/auth/strategies/local.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
```

We extend the base `PassportStrategy` with the `Strategy` from `passport-local`. We then need to implement a `validate` method that validate the credentials. Because the validation logic does not belong in the strategy, we implement it in the `AuthService`, and get it through Dependency Injection in the constructor as usual. If validation fails, the error thrown will be handled by Nest to return a 403 to the user. Let's now add more functionnality to our service for signing in.

```ts:title=src/auth/auth.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    //...
  }

  async signIn(user: User) {
    const payload = { username: user.username, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
}
```

We implemented a very simple but effective way to validate a user, by finding a corresponding username in the database and letting bcrypt compare both stored and input passwords. If it's a match, we return the user. The `signIn` method is a simple call to the JwtService (obtained through Dependency Injection, again) to create a JWT as `accessToken` and return it. The controller will call that method after running through the guard.

Guards are a feature of NestJs capable of intercepting requests made to a controller. They can then decide to let the request continue through, or reject it. In our case, our guard will be an AuthGuard and will be in charge of checking the credentials of the user. Here is the sign in flow :

1. The user POST a request to /auth/signin with his credentials.
2. The request hits the local-auth Guard.
3. The auth guard validates the user through the local strategy we implemented.
4. The auth guard forwards the request to the controller if the credentials are validated, if not, a 403 is returned.
5. The controller calls the `signIn` method in charge of creating a JWT.
6. The generated JWT is returned to the user.

As you can see, with NestJs, everything is layered and organized: one component does one thing. Let's create out local-auth guard and the guarded signin route.

```ts:title=src/auth/guards/local-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
```

It's as simple as that. Now we can add a signin route, guarded by the local-auth guard, that calls the `signIn` method.

```ts:title=src/auth/auth.controller.ts
import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }
}
```

And here we are! We now have a route to request a valid accessToken with valid credentials. We can now protect routes by requesting a token.

##### Protecting a route

The signin route is actually a route guarded by credentials validation. Any other protected route will just be a route guarded by jwt validation. That simple means we will create a new strategy based on jwt and its matching guard to protect our routes.
Let's start by creating the Passport strategy to use Jwt. We already imported it in the Auth module earlier.

```ts:title=src/auth/strategies/jwt-auth.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { _id: payload.sub, username: payload.username };
  }
}
```

Nothing fancy here, we are configuring the strategy to extract the token as Bearer from the request header. As with every strategy, we implement a `validate` method that extracts values from our token. We could get other useful values like roles for example if we implemented that.

We now create a guard, the exact same way we did for the local-auth.

```ts:title=src/auth/guards/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

And we can finally use that guard to protect a route. We will add a very simple route to get our user info as an example. Here is what our controller should look like.

```ts:title=src/auth/auth.controller.ts
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }
}
```

Here is the flow the request goes through when calling the protected route :

1. The user GET a request to /auth/me with a Bearer token as header
2. The request hits the jwt-auth guard.
3. The guard validates the token, the strategy extracts id and username as user from the payload to the request.
4. The guard forwards the request to the controller.
5. The controller returns the user contained in the request.

We can now make requests to protected routes, and the controller directly knows who we are if we make requests with a valid token.

That sums up my take on JWT-based authentication for APIs built with NestJs. That was a long one, and I'm glad to see you made it until the end of it and I can only hope it helped you understand some of the flow of NestJs and why I love the framework so much.

---

_All this code is part of my FoxFam League project. You can find more infos on the [GitHub repo](https://github.com/prazdevs/foxfam-league) or in the [Projects section](https://praz.dev/projects). If you encounter any issue, or have any question, let me know, I'd be more than happy to help!_
