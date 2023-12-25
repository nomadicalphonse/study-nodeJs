ex01
 
HTTP를 통한 웹화면 출력 및 슈퍼바이저 환경셋팅

[ 슈퍼바이져 환경설정 ]
슈퍼바이져를 통해서 서버를 실행하면 파일수정시 서버를 재부팅 하지 않아도 자동으로 수정내용이 서버에 반영됩니다.
1. 슈퍼바이져 로컬프로젝트 디렉터리에 설치 - npm install supervisor --save-dev 
2. 실행 - npx supervisor app.js

main01.js 
- 일반함수를 통해서 브라우져에 내용을 전달합니다.
main02.js 
- 익명 화살표함수를 통해서 브라우져에 내용을 전달합니다.
- req.url을 통한 분기작업을할 수 있습니다.
- html파일을 직접호출해서 출력합니다.

[참조]
[node.js 2-1] http 프로젝트 생성 및 html file 전송
https://youtu.be/HIh-T-pQ3E8?si=-MQoy_M4gVYHG4nz