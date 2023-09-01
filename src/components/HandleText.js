import Keyword from "./Keyword";

// export Ha
export default function HandleText({ text }) {
    function convertTextToELement() {
        if (text) {
            let splitArr = text.split("//");
            let child = [];
            splitArr.forEach((a, index) => {
                if (index === 1) {
                    child.push(<Keyword key={index}>{a}</Keyword>);
                } else {
                    child.push(a);
                }
            });
            return child;
        }
        return "";
    }

    return <>{convertTextToELement()}</>;
}
