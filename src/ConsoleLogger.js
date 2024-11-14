import { Logger, LogLevel } from "./Logger.js" 

const colorBegin = {
    [LogLevel.debug]: "\u001b[02m\u001b[37m",
    [LogLevel.info]: "\u001b[00m",
    [LogLevel.warn]: "\u001b[33m",
    [LogLevel.error]: "\u001b[31m"
}

const colorReset = "\u001b[00m"

class ConsoleLogger extends Logger 
{
    constructor(...args) {
        super(...args)
        let options = args[0] ?? { }
        this.color = !!(options.color)
    }

    writeImpl(level, text) {
        let out = process.stdout
        if (this.color) out.write(colorBegin[level])
        out.write(text)
        if (this.color) out.write(colorReset)
        out.write("\n")
    }
}

export {
    ConsoleLogger
}
