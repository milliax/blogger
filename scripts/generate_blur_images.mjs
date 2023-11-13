// const ffmpeg = require("ffmpeg")
// import ffmpeg from "ffmpeg"
// import fs from "fs"
import { glob } from "glob"
// const glob = require("glob")
// const ffmpeg = require("ffmpeg")
// import { spawn } from "node:child_process"
import util from "node:util"
// import { exec } from "node:child_process"
import { exec as pre_exec } from "node:child_process"
const exec = util.promisify(pre_exec)

export default async function blur() {
    // get files
    const all_files = await glob(`./public/static/images/**/*`, (err, res) => {
        if (err) {
            console.error(`Error: `, err)
            return;
        }
    })
    console.log(all_files)

    // check for ffmpeg installed

    // ffmpeg images
    all_files.forEach(async (file) => {
        const input_file = file;
        const output_file = file.replace(`public/static/images`, `public/static/images/blur`);
        // console.log(`input: ${input_file}`)
        // console.log(`output: ${output_file}`)
        format_image(input_file, output_file)
    })

}

const format_image = async (input_file, output_file) => {
    // const runner = spawn(``)

    const { stdout, stderr } = await exec(`ffmpeg -i ${input_file} -vg "[0:v]split=2[blur][vid];[blur]scale=720:720:force_original_aspect_ratio=increase,crop=720:720,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[vid]scale=720:720:force_original_aspect_ratio=decrease[ov];[bg][ov]overlay=(W-w)/2:(H-h)/2" ${output_file}`)
    console.error(`${new Date()} : STDERR`, stderr)
}

blur();