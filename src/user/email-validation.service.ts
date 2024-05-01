import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailValidationService{
    private readonly emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    validateEmail(email: string): boolean {
        if (!email || email.trim().length === 0 ) {
            return false;
        }

        return this.emailRegex.test(String(email).toLowerCase());
      }
}