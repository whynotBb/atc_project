import styled from "styled-components";
import Weather from "../components/UI/Weather";

function LiveControl() {
    const Now = styled.div``;
    return (
        <section>
            <Now>
                <div className="updatetime">2023.07.07 Monday 14:06:10</div>
                <Weather />
            </Now>
        </section>
    );
}
export default LiveControl;
