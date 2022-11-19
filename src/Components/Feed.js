import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [blocks, setBlocks] = useState([]); // TODO: edit this variable

    // function click(block) {
    //     setBlocks(block, ...blocks)
    //     console.log(blocks)
    // }
    const click = (block) => {
        setBlocks(blocks => [block, ...blocks])
    }

    const posts = blocks.map((block) => (
        <li> <Block color={block}></Block> </li>
    ))

    return (
        <div>
            <Menu handleClick={ click }></Menu>
            {/* Below is where all of your Blocks should render! */}
            { posts }
        </div>
    );
}

export default Feed;