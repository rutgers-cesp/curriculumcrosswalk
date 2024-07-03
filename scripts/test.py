import pandas as pd
import json

# Load the Excel file
curriculumCrosswalk = pd.read_excel(
    "files/MS.CS_CurriculumCrosswalk.xlsx", sheet_name="Curriculum Crosswalk"
)


def CCDataframeToJSON(df, filepath):
    # Convert DataFrame to a list of dictionaries
    json_list = df.to_dict(orient="records")

    # Write the list of dictionaries to a JSON file
    with open(filepath, "w", encoding="utf-8") as output:
        json.dump(json_list, output, ensure_ascii=False, indent=4)


# Call the function with the DataFrame and the desired output file path
CCDataframeToJSON(curriculumCrosswalk, "outputs/curriculum_crosswalk.json")
