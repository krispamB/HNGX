import { Request, Response } from "express";
import { response } from "./types.js";

export class Index {
  getInfo(req: Request, res: Response) {
    const slack_name = req.query.slack_name
    const track = req.query.track

    const currentDate: Date = new Date()
    
    const currentDay: number = currentDate.getDay()

    const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const data: response = {
      slack_name: slack_name.toString(),
      current_day: daysOfWeek[currentDay],
      utc_time: currentDate,
      track: track.toString(),
      github_file_url: 'https://github.com/krispamB/HNGX/blob/main/BackendStageOneTask/dist/index.js',
      github_repo_url: 'https://github.com/krispamB/HNGX/tree/main',
      status_code: 200
    }

    return res.status(200).json(data)
  }
}