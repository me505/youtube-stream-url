import {getInfo} from "../src/esm/index.mjs"

(async () => {
    console.log(await getInfo({ url: 'https://www.youtube.com/watch?v=weRHyjj34ZE', throwOnError: true }))
})();
