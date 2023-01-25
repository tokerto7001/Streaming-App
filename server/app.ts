import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import fsPromises from 'fs/promises'
import fs from 'fs'

const app: Application = express()

app.use(cors())

app.get('/:videoPath', async (req: Request, res: Response) => {

    const rangeHeader = req.headers.range
    // check req header if it contains a rage attr
    if (!rangeHeader) throw new Error('Requires Range header')

    // get file stat with fs module to access size
    const videoPath = `./videos/${req.params.videoPath}`
    const fileData = await fsPromises.stat(videoPath)
    const videoSize = fileData.size

    // split the range header
    const splittedRange = rangeHeader.replace(/bytes=/, '').split('-')

    // get the starting byte from req header's range
    const start = parseInt(splittedRange[0])

    // decide the end byte considering chunk size
    const end = splittedRange[1] ? parseInt(splittedRange[1], 10) : videoSize - 1

    // calculate content length
    const contentLength = end - start + 1

    // create and set response headers
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }
    // const remaining = videoSize - start

    // mark the current contet as completed if this is the latest chunk
    // if (remaining < this.chunkSize) {
    //     userCourseService.updateUserProgress(userId, courseId, contentId)
    // }

    // create a read stream and pipe it ro the res object
    const videoStream = fs.createReadStream(videoPath, { start, end })

    res.writeHead(206, headers)
    videoStream.pipe(res)
}
)


export default app