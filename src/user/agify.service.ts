import { Injectable } from "@nestjs/common";

@Injectable()
export class AgifyService {
    private readonly agifyUrlBase = "https://api.agify.io?name="

    async getAge(name: string): Promise<number> {
        const requestUrl = this.agifyUrlBase + name;
        const response = await fetch(requestUrl);
        const data: AgifyResponse = await response.json()
        return data.age;
    }
}

interface AgifyResponse{
    count: number;
    name: string;
    age: number
}