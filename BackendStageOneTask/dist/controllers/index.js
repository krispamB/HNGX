"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
class Index {
    getInfo(req, res) {
        const slack_name = req.query.slack_name;
        const track = req.query.track;
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const data = {
            slack_name: slack_name.toString(),
            current_day: daysOfWeek[currentDay],
            utc_time: currentDate,
            track: track.toString(),
            github_file_url: 'https://github.com/krispamB/HNGX',
            github_repo_url: 'https://github.com/krispamB/HNGX',
            status_code: 200
        };
        return res.status(200).json(data);
    }
}
exports.Index = Index;
//# sourceMappingURL=index.js.map