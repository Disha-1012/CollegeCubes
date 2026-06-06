import colleges from "@/data/indian-colleges.json";
import {
    College
}
    from "@/types/college";
export async function predictCollege(

    exam: string,
    rank: number
) {
    let result =
        colleges as College[];
    // Only engineering examples
    // You can extend later for NEET etc.
    if (
        exam.toLowerCase()
        === "jee"
    ) {
        result =
            result.filter(
                college =>
                    college.best_suit_for
                        .toLowerCase()
                        .includes(
                            "engineering"
                        )
            );
    }
    // Rank based logic
    let prediction =
        result.filter(
            (college, index) => {
                if (rank <= 5000) {
                    return index < 10;
                }
                if (rank <= 15000) {
                    return index < 25;
                }
                if (rank <= 50000) {
                    return index < 50;
                }
                return index < 20;
            }
        );
    return prediction.map(
        (college) => ({
            college,
            chance:
                rank <= 10000
                    ?
                    "High Chance"
                    :
                    rank <= 30000
                        ?
                        "Good Chance"
                        :
                        "Possible Chance"
        })
    );
}