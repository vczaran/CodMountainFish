from flask import Blueprint, jsonify, session, request
from ..models.fish_Report_Model import Fish_Report
from ..forms import FishReportForm


fish_report_routes = Blueprint('fish_report', __name__)


@fish_report_routes.route('/', methods=["GET", "POST"])
def get_fish_reports():
    """
    get all fish reports
    """
    if request.method == "GET":
        return jsonify(Fish_Report.get_All("Fish_Report"))
    if request.method == "POST":
        print("REQUEST: ", request)
        form = FishReportForm()
        newFishReport = Fish_Report(
            date=form.data["date"],
            images=form.data["images"],
            description=form.data["description"],
        )
        print("FISH REPORT: ", newFishReport)
        return jsonify({"Fish_Report": newFishReport.save_One("Fish_Report")})
