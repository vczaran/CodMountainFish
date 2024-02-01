from flask import Blueprint, jsonify, session, request
from ..models.fish_Report_Model import Fish_Report
from ..forms import FishReportForm
from .aws import get_unique_filename, upload_file_to_s3



fish_report_routes = Blueprint('fish_report', __name__)


@fish_report_routes.route('/', methods=["GET", "POST"])
def get_fish_reports():
    """
    get all fish reports
    """
    if request.method == "GET":
        return jsonify(Fish_Report.get_All("Fish_Report"))
    if request.method == "POST":
        print("REQUEST: ")
        form = FishReportForm()
        print("FORM: ", form.data)
        image = form.data["image"]
        print("IMAGE: ", image)


        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print("UPLOAD: ", upload)
        newFishReport = Fish_Report(
            date=form.data["date"],
            description=form.data["description"],
            image=upload["url"]
        )
        print("FISH REPORT: ", newFishReport)
        return jsonify({"Fish_Report": newFishReport.save_One("Fish_Report")})
