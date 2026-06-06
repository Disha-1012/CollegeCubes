"use client";

import {
    useForm
}
    from "react-hook-form";
import {
    z
}
    from "zod";
import {
    zodResolver
}
    from "@hookform/resolvers/zod";
import {
    predictCollege
}
    from "@/services/predictorService";
import {
    useState
}
    from "react";
import {
    PredictionResult
}
    from "@/types/predictor";
const schema =
    z.object({
        exam:
            z.string()
                .min(1, "Exam is required"),
        rank:
            z.coerce
                .number()
                .min(1, "Rank must be greater than 0")
    });
type FormData =
    z.infer<typeof schema>;
export default function PredictorForm() {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    }
        =
        useForm<FormData>({
            resolver:
                zodResolver(schema) as any
        });
    const [result, setResult]
        =
        useState<PredictionResult[]>([]);
    const [loading, setLoading]
        =
        useState(false);
    async function submit(
        data: FormData
    ) {
        try {
            setResult([]);
            setLoading(true);
            const response =
                await predictCollege(
                    data.exam,
                    data.rank
                );
            setResult(response);
        }
        catch (error) {
            console.error(
                "Prediction error",
                error
            );
            setResult([]);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        
        <div>
            <form
                onSubmit={
                    handleSubmit(submit)
                }
                className="
                space-y-5
                "
            >
                <input
                    {...register("exam")}
                    placeholder="
                    Enter Exam (JEE, NEET)
                    "
                    className="
                    border
                    p-3
                    rounded-xl
                    w-full
                    bg-white
                    dark:bg-slate-900
                    text-gray-900
                    dark:text-white
                    "
                />
                {
                    errors.exam &&
                    <p
                        className="
                        text-red-500
                        "
                    >
                        {errors.exam.message}
                    </p>
                }
                <input
                    {...register("rank")}
                    placeholder="
                    Enter Rank
                    "
                    className="
                    border
                    p-3
                    rounded-xl
                    w-full
                    bg-white
                    dark:bg-slate-900
                    text-gray-900
                    dark:text-white
                    "
                />
                {
                    errors.rank &&
                    <p
                        className="
                        text-red-500
                        "
                    >
                        {errors.rank.message}
                    </p>
                }
                <button
                    disabled={loading}
                    className="
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition
                    disabled:opacity-50
                    "
                >
                    {
                        loading
                            ?
                            "Predicting..."
                            :
                            "Predict College"
                    }
                </button>
            </form>
            <div className="mt-8">
                {
                    result.length === 0
                    &&
                    !loading
                    &&
                    <p
                        className="
                        text-gray-500
                        dark:text-gray-400
                        "
                    >
                        Enter details to get prediction
                    </p>
                }
                {
                    result.map(
                        (item, index) => (
                            <div
                                key={
                                    `${item.college.id}-${index}`
                                }
                                className="
                                border
                                rounded-xl
                                p-5
                                mb-4
                                bg-white
                                dark:bg-slate-900
                                border-gray-200
                                dark:border-gray-700
                                "
                            >
                                <h2
                                    className="
                                    font-bold
                                    text-xl
                                    text-gray-900
                                    dark:text-white
                                    "
                                >
                                    {
                                        item.college.college_name
                                    }
                                </h2>
                                <p>
                                    ⭐
                                    {
                                        item.college.rating ?? "N/A"
                                    }
                                </p>
                                <p
                                    className="
                                    mt-2
                                    font-semibold
                                    text-blue-600
                                    "
                                >
                                    {
                                        item.chance
                                    }
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}