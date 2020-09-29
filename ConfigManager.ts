import fs = require("fs");

export class Config {
    "ip": string;
    "excelRange": {
        "start": string,
        "stop": string
    }
}
export class ConfigManager {
    static config: Config

    static loadConfig(path: string) {
        if (fs.existsSync(path)) {
            this.config = JSON.parse(fs.readFileSync(path).toString());
        } else {
            this.createConfigFile(path);
        }
    }

    private static createConfigFile(path: string) {
        let newConfig:Config = new Config();
        newConfig.ip = "0.0.0.0:3000";
        newConfig.excelRange = {"start": "A2", "stop": "D10"};

        this.config = <any>newConfig;
        fs.writeFileSync(path, JSON.stringify(newConfig, null, "\t"));
    }
}