export default function HeadlineBox({ backgroundImage, headline }) {
    return (
        <div>
            <div
                className="headlineboxbg flex flex-col justify-center items-center text-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="gradient"></div>
                <h1 className="text-8xl text-white headlinetext">{headline}</h1>
            </div>
        </div>
    );
}