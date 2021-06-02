import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);

    const post = orm.em.create(Post, {title: 'the first post'});
    await orm.em.persistAndFlush(post);
};

main().catch(err => {
    console.error(err);
})


console.log("Hello World!");