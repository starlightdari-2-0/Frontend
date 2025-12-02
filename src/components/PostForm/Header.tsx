import { HeaderContainer, BackButton, SubmitButton } from "./styled";
import back from "/public/goBack.svg";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const isFilled = true;

    return (
        <HeaderContainer>
            <BackButton
                src={back}
                alt="go back"
                onClick={() => router.back()}
            />
            <SubmitButton $active={isFilled}>남기기</SubmitButton>
        </HeaderContainer>
    );
}
