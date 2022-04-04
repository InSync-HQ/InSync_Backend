import Logger from "./logger";
class MyStream {
    write(text: string) {
        Logger.info(text.replace(/\n$/, ""));
    }
}
export default new MyStream();