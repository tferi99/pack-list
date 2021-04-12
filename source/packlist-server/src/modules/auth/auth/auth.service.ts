import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { User } from '../../../entities/user';
import { DEFAULT_ADMIN } from '../../../common/app-constants';
import { UserController } from '../user/user.controller';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AuthService {
  currentUserTEST: User;

  constructor() {
    this.currentUserTEST = plainToClass(User, DEFAULT_ADMIN);

    //this.currentUserTEST = null;
  }

  getCurrentUser(checkLoggedIn = true): User {
    const u = this.currentUserTEST;

    if (checkLoggedIn) {
      if (!u) {
        throw new UnauthorizedException('There is no logged-in user');
      }
    }
    return u;
  }

  isCurrentUserAdmin(): boolean {
    const u = this.getCurrentUser();
    if (!u) {
      return false;
    }
    return u.admin;
  }

  checkCurrentUserIsAdmin() {
    if (!this.isCurrentUserAdmin()) {
      const u = this.getCurrentUser();
      throw new UnauthorizedException(`Current user (${u.username}) is not an admin`);
    }
  }

  thisIsCurrentUser(user: User): boolean {
    const u = this.getCurrentUser();
    if (!user) {
      return false;
    }
    return u.id == user.id;
  }

  checkThisIsCurrentUser(user: User) {
    if (!this.thisIsCurrentUser(user)) {
      throw new NotAcceptableException(`${user.username} is not the current user`);
    }
  }

  checkThisIsCurrentUserId(userId: number): boolean {
    const u = this.getCurrentUser(false);
    if (!u || u.id != userId) {
      throw new NotAcceptableException(`User[${userId}] is not the current user`);
    }
    return true;
  }
}
