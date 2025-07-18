import PageTitle from "../components/layout/PageTitle";
import MainContainer from "../components/paint-match/MainContainer";

export default function PaintMatch() {
    return (
        <main className="flex flex-col px-17">
            <PageTitle title="Paint Match" />
            <MainContainer />
        </main>
    );
}