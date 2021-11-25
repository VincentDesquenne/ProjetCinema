import { environment } from '../../environments/environment';
export class LocalAuthManager {

    static saveCredentials(username: string, password: string): void {
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
    }

    static getCredentials(): {username: string, password: string } {

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        return {username: username === null ? "" : username, password: password === null ? "" : password};
    }

    static getApiKey(): string{
        return environment.api.key;
    }

    static saveToken(login: string, pass: string): void {
        const hashString = 'Basic ' + btoa(login + ':' + pass);
        localStorage.setItem('auth', hashString);
    }

    static buildToken(login: string, pass: string): string {
        return 'Basic ' + btoa(login + ':' + pass);
    }

    static getToken() {
        // return localStorage.getItem('auth');
        return "Basic YWRtaW46X2FkbWluXw==";
    }

    static logout() {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    static isAuth() {
        // const token = LocalAuthManager.getToken();
        // return token && token.length > 5;
        // Htt
        return false;
    }
}
