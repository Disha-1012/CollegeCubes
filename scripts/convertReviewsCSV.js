const csv = require("csvtojson");
const fs = require("fs");
csv()
    .fromFile(
        "./src/data/collegereview.csv"
    )
    .then((rows) => {
        const grouped = {};
        rows.forEach(row => {
            const collegeName =
                row.college?.trim();
            if (!collegeName)
                return;
            if (!grouped[collegeName]) {
                grouped[collegeName] = {
                    college_name:
                        collegeName,
                    ratings: [],
                    reviews: []
                };
            }
            grouped[collegeName]
                .ratings
                .push(
                    Number(row.rating)
                );
            grouped[collegeName]
                .reviews
                .push({
                    id:
                        String(
                            grouped[collegeName]
                                .reviews.length + 1
                        ),
                    user:
                        row.Name,
                    rating:
                        Number(row.rating),
                    comment:
                        row.review
                });
        });
        const result = Object.values(grouped)
            .map(item => {
                const avg =
                    item.ratings.reduce(
                        (a, b) => a + b,
                        0
                    )
                    /
                    item.ratings.length;
                return {
                    college_name:
                        item.college_name,
                    rating:
                        Number(avg.toFixed(1)),
                    review_count:
                        item.reviews.length,
                    reviews:
                        item.reviews
                }
            });
        fs.writeFileSync(
            "./src/data/reviews.json",
            JSON.stringify(
                result,
                null,
                2
            )
        );
        console.log(
            "Reviews CSV converted successfully"
        );
    });