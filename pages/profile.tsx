import Container from "@/components/Container/Container"
import MainLayout from "@/components/MainLayout/MainLayout";
import Sidebar from "@/components/Sidebar/Sidebar";
import UserLayout from "@/components/UserLayout/UserLayout";
import UserCard from "@/pageModules/user/components/UserCard/UserCard";
import { Row, Col } from "antd";
import img from '@/public/assets/images/my-img.png';
import Button from "@/components/Button/Button";
import UserInfo from "@/pageModules/profile/components/UserInfo/UserInfo";

const Profile = () => {

    return (
        <Container>
            <MainLayout>
                <Sidebar/>
                <UserLayout
                    side={
                        <UserCard
                            image={img}
                            verify={true}
                            >
                            <Button
                                text='Подтвердить фото'
                                style={{
                                    padding: '8px 10px',
                                    fontSize: 18,
                                    lineHeight: '27px',
                                    width: '100%'
                                }}
                                />
                        </UserCard>
                    }
                    main={
                        <UserInfo/>
                    }
                    />
            </MainLayout>
        </Container>
    )
}

export default Profile;