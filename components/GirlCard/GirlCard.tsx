import styles from './GirlCard.module.scss';
import {FC} from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';
import { girlCardType } from './types';
import {FaRegSmileWink} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsCamera, BsCheck} from 'react-icons/bs';
import Link from 'next/link';

const GirlCard:FC<girlCardType> = ({
    image,
    name,
    location,
    online,
    photoCount,
    verified,
    age,
    link = '/users/user_id'
}) => {

    return (
        <div className={styles.card}>
            <div className={styles.main}>
                <div className={styles.badges}>
                    <div className={styles.photo_count}><BsCamera/>{photoCount}</div>
                        {
                        verified ? (
                            <div className={styles.verif}><BsCheck/></div>
                        ) : null
                    }
                </div>
                
                
                <Link href={link} className={styles.img}>
                    <Image
                        placeholder={'blur'} 
                        src={image} 
                        alt=""/>
                </Link>
            </div>
            <div className={styles.body}>
                <div className={styles.action}>
                    <Row gutter={[2,2]}>
                        <Col span={7}>
                            <button className={styles.button}><FaRegSmileWink/></button>
                        </Col>
                        <Col span={7}>
                            <button className={styles.button}><AiOutlineStar/></button>
                        </Col>
                        <Col span={10}>
                            <button className={styles.button}>
                                <span>Написать</span> <FiMail/>
                            </button>
                        </Col>
                    </Row>
                </div>
                <div className={styles.info}>
                    <Col span={24}>
                        <Row gutter={[2,2]}>
                            <Col span={24}>
                                <div className={`${styles.name} ${online ? styles.online : ''}`}>{name}, {age}</div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.loc}>{location}</div>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default GirlCard;