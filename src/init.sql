-- somoim.MEM_MNG definition

CREATE TABLE `MEM_MNG` (
                           `MEM_SEQ` int NOT NULL AUTO_INCREMENT COMMENT '회원SEQ',
                           `SMI_SEQ` int DEFAULT NULL COMMENT '소모임SEQ',
                           `USER_ID` varchar(40) NOT NULL COMMENT '아이디',
                           `USER_NM` varchar(40) NOT NULL COMMENT '이름',
                           `AGE` varchar(2) NOT NULL COMMENT '나이',
                           `REG_DATE` varchar(8) NOT NULL COMMENT '가입일',
                           `GENDER` varchar(2) NOT NULL COMMENT '성별',
                           `LOC` varchar(20) NOT NULL COMMENT '사는지역',
                           `RMRK` varchar(1000) NOT NULL COMMENT '비고',
                           `DEL_YN` char(1) NOT NULL DEFAULT 'N',
                           `FRST_WRT_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최초작성일시',
                           `LAST_CHNG_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '최종수정일시',
                           PRIMARY KEY (`MEM_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3 COMMENT='회원관리';


-- somoim.SMI_ATN_MNG definition

CREATE TABLE `SMI_ATN_MNG` (
                               `ATN_SEQ` int NOT NULL AUTO_INCREMENT COMMENT '참석SEQ',
                               `MEM_SEQ` int NOT NULL COMMENT '회원SEQ',
                               `SCH_SEQ` int NOT NULL COMMENT '일정SEQ',
                               `FRST_WRT_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최초작성일시',
                               `LAST_CHNG_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '최종수정일시',
                               PRIMARY KEY (`ATN_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=454 DEFAULT CHARSET=utf8mb3 COMMENT='참석회원관리';


-- somoim.SMI_MNG definition

CREATE TABLE `SMI_MNG` (
                           `SMI_SEQ` int NOT NULL AUTO_INCREMENT COMMENT '소모임SEQ',
                           `USE_YN` varchar(40) NOT NULL COMMENT '소모임명',
                           `FRST_WRT_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최초작성일시',
                           `LAST_CHNG_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '최종수정일시',
                           PRIMARY KEY (`SMI_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='소모임관리';



-- somoim.SMI_SCHE definition

CREATE TABLE `SMI_SCHE` (
                            `SCH_SEQ` int NOT NULL AUTO_INCREMENT COMMENT '일정SEQ',
                            `SMI_SEQ` int NOT NULL COMMENT '소모임SEQ',
                            `SCH_NM` varchar(40) NOT NULL COMMENT '일정명',
                            `SCH_DATE` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '날짜',
                            `SCH_TIME` varchar(4) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '시간',
                            `SCH_CNT` int NOT NULL COMMENT '인원',
                            `SCH_LOC` varchar(40) NOT NULL COMMENT '장소',
                            `FRST_WRT_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최초작성일시',
                            `LAST_CHNG_DTIM` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '최종수정일시',
                            PRIMARY KEY (`SCH_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb3 COMMENT='소모임일정관리';