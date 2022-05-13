import { Link } from "react-router-dom";
import './post.css'
export default function Post({ img }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=''
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to='/posts?cat=Music'>
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to='/posts?cat=Life'>
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to='/post/abc' className="link">
                        Title
                    </Link>
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam rerum officia quaerat quasi quod nostrum veritatis
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem esse necessitatibus, hic vero neque consequatur laudantium accusantium quo accusamus, dignissimos enim repellat fugit dolore eaque consectetur similique, reiciendis molestias? Explicabo culpa accusamus iure? Qui voluptatum amet vitae fugit? Earum a suscipit vero aliquid et voluptatem corporis culpa dignissimos vitae sint eaque optio repellendus maxime nulla, consectetur saepe nesciunt? Nostrum, quasi facilis. Vero reprehenderit rerum itaque facere, nisi quibusdam doloremque sint consequatur accusamus voluptatibus quos pariatur in animi adipisci repellat quia impedit, doloribus, molestias nobis? Fugit, dolore tempora iusto iure, quo eos illum repellat reiciendis consequuntur laudantium, impedit vitae distinctio ipsam! Doloribus facere sint nostrum officia voluptatibus culpa atque vero, ea totam nobis? Laudantium magnam ducimus nihil pariatur eaque voluptates. Harum eligendi adipisci ab, maxime ipsum natus. Minus eveniet velit illum sint doloribus officia sunt. Alias dolorem nam nesciunt incidunt enim. Quia inventore repellendus est quasi repudiandae? Officia iste nihil distinctio minima nemo, maxime dicta dolores eveniet saepe eaque temporibus? Ipsa eos esse, saepe labore facilis amet nam tempore impedit. Debitis sed corporis porro ipsum cumque, explicabo odit ullam quas architecto, accusamus ea sint voluptatum itaque pariatur culpa aut quasi fugiat molestiae consectetur ex? Velit quod doloremque harum deserunt. Labore quidem, ratione vel placeat ducimus perferendis nulla! Ratione dicta recusandae corporis impedit dignissimos sapiente vel hic inventore nostrum aliquid temporibus enim, voluptatum voluptates itaque dolore a similique earum ab tenetur. Quasi cupiditate amet libero nisi impedit molestias. Quisquam minima obcaecati unde est eligendi, quos, tenetur reiciendis dolores minus neque incidunt et nisi nostrum qui at commodi blanditiis dolorum id quasi tempora iste quaerat fuga ab consequatur. Eum odio molestias molestiae sapiente, repudiandae ex laboriosam necessitatibus voluptates hic nemo excepturi odit minima debitis? Obcaecati accusamus, libero enim ullam maxi
                me harum ipsum ratione autem nam. Adipisci iure consequuntur alias repellendus aliquid sequi?
                voluptatum sunt unde quisquam, ad ullam non dolor impedit maiores. Accusantium, nemo. Eius?
            </p>
        </div>
    );
}