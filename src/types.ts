export type Point = {
    ds: Date,
    actual?: Number,
    predicted: Number,
    predicted_lower: Number,
    predicted_upper: Number
}