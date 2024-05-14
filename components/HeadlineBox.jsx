export default function HeadlineBox({ backgroundImage, headline }) {
    return (
        <div>
            <div
                className="headlineboxbg flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="gradient"></div>
                <h1 className="text-8xl text-white headlinetext">{headline}</h1>
            </div>
            <p>Click the tabs below to learn more about our plants and flowers</p>
        </div>
    );
}