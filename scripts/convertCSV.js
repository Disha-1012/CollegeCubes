const csv = require("csvtojson");
const fs = require("fs");
csv()
    .fromFile("./src/data/indian-colleges.csv")
    .then((rows) => {
        const colleges = rows.map(
            (row, index) => ({
                id: String(index + 1),
                college_name:
                    row.college_name ||
                    row.name ||
                    row["College Name"] ||
                    "Unknown College",
                location:
                    row.location ||
                    row.Location ||
                    row.city ||
                    row.City ||
                    row.state ||
                    row.State ||
                    "India",
                best_suit_for:
                    row.best_suit_for ||
                    row.Course ||
                    row.course ||
                    "Engineering",
                fees:
                    row.fees ||
                    row.Fees ||
                    "Not Available",
                placement:
                    row.placement ||
                    row.Placement ||
                    "Not Available",
                type:
                    row.type ||
                    row.Type ||
                    "College",
                rating:
                    row.rating ||
                    row.Rating ||
                    4.0
            })
        );
        fs.writeFileSync(
            "./src/data/indian-colleges.json",
            JSON.stringify(
                colleges,
                null,
                2
            )
        );
        console.log(
            "College JSON Updated"
        );
    });