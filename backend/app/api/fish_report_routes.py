from flask import Blueprint, jsonify, session, request
from ..models.fish_Report_Model import Fish_Report
from ..forms import FishReportForm
from .aws import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from ..models.db import db
from bson import ObjectId

fish_report_routes = Blueprint('fish_report', __name__)


@fish_report_routes.route('/', methods=["GET", "POST"])
def get_fish_reports():
    """
    get all fish reports
    """
    if request.method == "GET":
        return jsonify(Fish_Report.get_All("Fish_Report"))
    if request.method == "POST":
        print("\n\nINFO: \n")
        print("REQUEST: ", request.cookies)
        form = FishReportForm()
        # form['csrf_token'].data = request.cookies['csrf_token']
        print("FORM: ", form.data)
        image = form.data["image"]
        print("IMAGE: ", image)


        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        newFishReport = Fish_Report(
            date=form.data["date"],
            description=form.data["description"],
            image=upload["url"]
        )
        return jsonify({"Fish_Report": newFishReport.save_One("Fish_Report")})



@fish_report_routes.route('/<id>', methods=["PUT", "DELETE"])
def update_delete_fish_report(id):
    if request.method == "PUT":
        print("PUT REQUEST: ", id)
        report = db.db["Fish_Report"].find_one({"_id": ObjectId(id)})
        form = FishReportForm()
        newFishReport = Fish_Report(
            date=form.data["date"],
            description=form.data["description"],
            image=report["image"]
        )
        # newFishReport.put_Update("Fish_Report", id)
        return jsonify(Fish_Report.put_Update("Fish_Report", id, newFishReport.__dict__))
    if request.method == "DELETE":
        report = db.db["Fish_Report"].find_one({"_id": ObjectId(id)})
        remove_file_from_s3(report["image"])
        return jsonify(Fish_Report.delete("Fish_Report", id))
