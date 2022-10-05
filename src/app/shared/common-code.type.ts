export enum MP_MENU_TYPE {
  ADD_MENU = 'ADD_MENU', // 추가 가능한 메뉴
  SCHED_MENU = 'SCHED_MENU', // 메인 메뉴에 들어가는 식단
  SWITCH_MENU = 'SWITCH_MENU', // 변경 가능한 메뉴
}
export const CONST_MP_MENU_TYPE = Object.values(MP_MENU_TYPE);

export enum MP_CONTENT_TYPE {
  ADDON_DISH = 'ADDON_DISH', // 부식
  MAIN_DISH = 'MAIN_DISH', // 메인반찬
  PRINCIPAL_FOOD = 'PRINCIPAL_FOOD', // 주식
  SIDE_DISH = 'SIDE_DISH', // 반찬
  SOUP_SIDE = 'SOUP_SIDE', // 국/탕
}
export const CONST_MP_CONTENT_TYPE = Object.values(MP_CONTENT_TYPE);

export enum DELIVERY_CHANNEL {
  B = 'B', // 배달의민족
  BAEMIN_KR = '배달의민족', // 배달의민족
  BAEMINONE_KR = '배민원', // 배민원
  BO = 'BO', // 배민1
  COUPANG_KR = '쿠팡이츠', // 쿠팡이츠
  ETC = 'ETC', // 기타
  PP = 'PP', // 쿠팡이츠
  RP = 'RP', // 요기요
  XM = 'XM', // 땡겨요
  YOGIYO = 'YOGIYO', // 요기요
  YOGIYO_KR = '요기요', // 요기요
}
export const CONST_DELIVERY_CHANNEL = Object.values(DELIVERY_CHANNEL);

export enum RESTAURANT_CATEGORY {
  BENTO = 'BENTO', // 도시락
  CHICKEN = 'CHICKEN', // 치킨
  CHINESE = 'CHINESE', // 중식
  DESSERT = 'DESSERT', // 디저트
  JAPANESE = 'JAPANESE', // 일식
  KOREAN = 'KOREAN', // 한식
  OTHER_FOOD = 'OTHER_FOOD', // 기타
  SALAD = 'SALAD', // 샐러드
  WESTERN = 'WESTERN', // 양식
}
export const CONST_RESTAURANT_CATEGORY = Object.values(RESTAURANT_CATEGORY);

export enum BUSINESS_STATUS {
  BIZ_NORMAL = 'BIZ_NORMAL', // 사업 정상
  BIZ_ON_HOLD = 'BIZ_ON_HOLD', // 사업 대기중
  BIZ_WITHDRAW = 'BIZ_WITHDRAW', // 사업 탈퇴
}
export const CONST_BUSINESS_STATUS = Object.values(BUSINESS_STATUS);

export enum BIZ_USER_STATUS {
  BIZ_USER_NORMAL = 'BIZ_USER_NORMAL', // 사업 사용자 정상
  BIZ_USER_ON_HOLD = 'BIZ_USER_ON_HOLD', // 사업 사용자 대기중
  BIZ_USER_WITHDRAW = 'BIZ_USER_WITHDRAW', // 사업 사용자 탈퇴
}
export const CONST_BIZ_USER_STATUS = Object.values(BIZ_USER_STATUS);

export enum BU_ROLE {
  BU_ROLE_ADMIN = 'BU_ROLE_ADMIN', // 사업 사용자 관리자
  BU_ROLE_NORMAL = 'BU_ROLE_NORMAL', // 사업 사용자 일반회원
}
export const CONST_BU_ROLE = Object.values(BU_ROLE);

export enum ORDER_STATUS {
  CANCELLED = 'CANCELLED', // 주문 취소
  IN_PREP = 'IN_PREP', // 준비중
  PACKAGED = 'PACKAGED', // 패킹완료
  WAITING = 'WAITING', // 대기중
}
export const CONST_ORDER_STATUS = Object.values(ORDER_STATUS);

export enum STATION_TYPE {
  COLD_ONE = 'COLD_ONE', // 콜드1 주방
  COLD_TWO = 'COLD_TWO', // 콜드2 주방
  FRIED = 'FRIED', // 볶음 주방
  NOODLE_OIL_FRIED = 'NOODLE_OIL_FRIED', // 면/튀김 주방
  SOUP_STEW = 'SOUP_STEW', // 국/탕/찌개 주방
}
export const CONST_STATION_TYPE = Object.values(STATION_TYPE);

export enum NOTIFICATION {
  COMMON = 'COMMON', // 일반 알림
  LARGE_ORDER_ALERT = 'LARGE_ORDER_ALERT', // 대량주문 알림
  MENU_ALERT = 'MENU_ALERT', // 메뉴 알림
}
export const CONST_NOTIFICATION = Object.values(NOTIFICATION);

export enum COOKING_STATUS {
  COMPLETE = 'COMPLETE', // 완료
  COOKING = 'COOKING', // 조리중
  IN_LINE = 'IN_LINE', // 대기중
}
export const CONST_COOKING_STATUS = Object.values(COOKING_STATUS);

export enum STATION_PREP {
  COOK_DONE = 'COOK_DONE', // 조리완료
  COOKING_IN_PROG = 'COOKING_IN_PROG', // 조리중
}
export const CONST_STATION_PREP = Object.values(STATION_PREP);

export enum ORDER_KIND {
  D = 'D', // 배달
  P = 'P', // 포장
  S = 'S', // 내점
}
export const CONST_ORDER_KIND = Object.values(ORDER_KIND);

export enum MP_CONTRACT_STATUS {
  DAYS_SWITCHED = 'DAYS_SWITCHED', // 기존 점주 계속 사용 - 받는 날만 변경
  IN_USE = 'IN_USE', // 점주-사업 계약 진행중
  R_OUT = 'R_OUT', // 점주 탈퇴 또는 나감
  SWITCHED = 'SWITCHED', // 점주 변경
}
export const CONST_MP_CONTRACT_STATUS = Object.values(MP_CONTRACT_STATUS);

export enum SERVE_TYPE {
  DINNER = 'DINNER', // 저녁주문
  LUNCH = 'LUNCH', // 점심 주문
}
export const CONST_SERVE_TYPE = Object.values(SERVE_TYPE);

export enum MEAL_PLAN_DAYS {
  FIVE_DAYS = 'FIVE_DAYS', // 주5일 밀플랜
  THREE_DAYS = 'THREE_DAYS', // 주3일 밀플랜
}
export const CONST_MEAL_PLAN_DAYS = Object.values(MEAL_PLAN_DAYS);

export enum POSFEED {
  FOODTECH = 'FOODTECH', // 푸드테크
  OTHER = 'OTHER', // 기타
  POSFEED = 'POSFEED', // 포스피드
}
export const CONST_POSFEED = Object.values(POSFEED);

export enum LOCATION_TYPE {
  HQ = 'HQ', // 본사관리자
  SATELLITE = 'SATELLITE', // 지사관리자
}
export const CONST_LOCATION_TYPE = Object.values(LOCATION_TYPE);

export enum PLAN_APPR_STATUS {
  MP_APPROVED = 'MP_APPROVED', // 밀플랜 식단 승인
  MP_DECLINED = 'MP_DECLINED', // 밀플랜 식단 반려
  MP_ON_HOLD = 'MP_ON_HOLD', // 밀플랜 식단 대기
  MP_REMOVED = 'MP_REMOVED', // 밀플랜 식단에서 빠짐
}
export const CONST_PLAN_APPR_STATUS = Object.values(PLAN_APPR_STATUS);

export enum MP_ORDER_STATUS {
  MP_COMPLETE = 'MP_COMPLETE', // 완료
  MP_ONGOING = 'MP_ONGOING', // 진행중
  MP_RESERVED = 'MP_RESERVED', // 예약상태
}
export const CONST_MP_ORDER_STATUS = Object.values(MP_ORDER_STATUS);

export enum MP_ORDER_SPAN {
  MP_DINNER = 'MP_DINNER', // 밀프로그램 - 저녁
  MP_LUNCH = 'MP_LUNCH', // 밀프로그램 - 점심
}
export const CONST_MP_ORDER_SPAN = Object.values(MP_ORDER_SPAN);

export enum ADMIN {
  NORMAL = 'NORMAL', // 일반관리자
  SUPER = 'SUPER', // 슈퍼관리자
}
export const CONST_ADMIN = Object.values(ADMIN);

export enum PICKUP_STATUS {
  ORDER_CANCELLED = 'ORDER_CANCELLED', // 주문 취소
  PICKED_UP = 'PICKED_UP', // 픽업완료
  READY_TO_PICKUP = 'READY_TO_PICKUP', // 대기중
}
export const CONST_PICKUP_STATUS = Object.values(PICKUP_STATUS);

export enum PRES_STATUS {
  PRES_CANCELLED = 'PRES_CANCELLED', // 취소
  PRES_COMPLETE = 'PRES_COMPLETE', // 진행완료
  SCHEDULED = 'SCHEDULED', // 진행예정
}
export const CONST_PRES_STATUS = Object.values(PRES_STATUS);

export enum RESTAURANT_STATUS {
  RESTAURANT_IN_USE = 'RESTAURANT_IN_USE', // 점주 식당 IN USE
  RESTAURANT_ON_HOLD = 'RESTAURANT_ON_HOLD', // 점주 식당 대기중
  RESTAURANT_OUT = 'RESTAURANT_OUT', // 점주 식당 WITHDRAWN
}
export const CONST_RESTAURANT_STATUS = Object.values(RESTAURANT_STATUS);

export enum RU_GRADE {
  RU_GRADE_ADMIN = 'RU_GRADE_ADMIN', // 관리자 점주 사용자
  RU_GRADE_NORMAL = 'RU_GRADE_NORMAL', // 일반 점주 사용자
}
export const CONST_RU_GRADE = Object.values(RU_GRADE);
