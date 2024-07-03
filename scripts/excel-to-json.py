import pandas as pd
import json

curriculumCrosswalk = pd.read_excel(
    "files/MS.CS_CurriculumCrosswalk.xlsx",
    sheet_name="Curriculum Crosswalk",
    header=None,
    index_col=2,
)

directoryUnits = pd.read_excel(
    "files/MS.CS_CurriculumCrosswalk.xlsx",
    sheet_name="Directory of Concepts",
    header=None,
    index_col=2,
)


def CCDataframeToJSON(df, filepath):
    res = []
    for index, column in df.items():
        if column.dtype != "object":
            continue

        item = {
            "title": column["Field"],
            "description": column["Course Description"],
            "suggested_grades": column["Suggested Grades"],
            "total_hours": column["Total Hours"],
            "price": column["Price"],
            "platform": column["Platform"],
            "programming_language": column["Programming Language"],
            "device_compatibility": column["Device Compatibility"],
            "auto_grading_availability": column["Auto-Grading Availability"],
            "course_lens": column['Course "Lens"'],
            "CSTA_standards": column["Standards Alignment"],
            "course_structure": column["Structure"],
            "sequencing": column["Sequencing"],
            "sequencing_details": column["(Suggested) Sequencing Detail"],
            "lesson_structure": column["Lesson Structure"],
            "training_info": column["Training Available"],
            "funding_info": column["Funding Information"],
            "date_modified": column["Date(s) Modified"],
            "spotlight": column["Spotlight"],
            "expert_take": column["Expert Take"],
        }
        res.append(item)

    with open(filepath, "w", encoding="utf-8") as output:
        json.dump(res, output, ensure_ascii=False, indent=4)


def directoryDataframeToJSON(df1, filepath):
    res = []
    for index, column in df1.items():
        if column.dtype != "object":
            continue

        print(column, "DARENNN")

        item = {
            "fundamentals": {
                "syntax": str(column["• Syntax"]),
                "debugging": str(column["• Debugging"]),
                "conditionals": str(column["• If Statements"]),
                "loops": str(column["• Loops"]),
                "nested": str(column["• Nested Structures"]),
                "functions": str(column["• Functions"]),
                "variables": str(column["• Variables"]),
            },
            "design": {
                "webdesign": str(column["• Web Design"]),
                "producing": str(column["• Producing/Customizing Shapes"]),
                "animation": str(column["• Animation"]),
                "interactivity": str(column["• Interactivity"]),
                "gamedesign": str(column["• Game Design & Development"]),
            },
            "applications": {
                "storytelling": str(column["• Storytelling"]),
                "data": str(column["• Data Analysis/Science"]),
                "career": str(column["• Careers in Computing"]),
                "impact": str(column["• Impacts/Daily Life"]),
            },
            "concepts": {
                "ai": str(column["• Artificial Intelligence"]),
                "hardware": str(column["• Hardware"]),
                "software": str(column["• Software/Applications"]),
                "cloud": str(column["• The Internet/Cloud/Networks"]),
                "history": str(column["• History of Computing"]),
                "ethics": str(column["• Ethics & Bias"]),
                "literacy": str(column["• Digital Citizenship/Literacy"]),
            },
        }
        res.append(item)

    with open(filepath, "w", encoding="utf-8") as output:
        json.dump(res, output, ensure_ascii=False, indent=4)


def main():
    CCDataframeToJSON(curriculumCrosswalk, "outputs/curriculum_crosswalk.json")
    directoryDataframeToJSON(directoryUnits, "outputs/directory_of_concepts.json")


if __name__ == "__main__":
    main()
