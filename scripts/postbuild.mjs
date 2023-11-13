import rss from './rss.mjs'
import blur from './generate_blur_images.mjs'

async function postbuild() {
    await rss()
    // await blur();
}

postbuild()
