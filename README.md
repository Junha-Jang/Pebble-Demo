# 조약돌 Demo

SSHS 조약돌의 연습 프로젝트입니다.

## 시작하기

로컬 컴퓨터에서 이 프로젝트를 작동시키기 위해 필요한 단계들입니다.

### Windows에서 설치하는 법

 1. choco 다운
 2. Meteor 다운
 3. git 다운
 4. 프로젝트 다운
 5. NPM 패키지 다운

Meteor를 설치하기 위해서 [choco](https://chocolatey.org/install)를 다운받아야 합니다.  
아래의 명령어를 관리자 권한으로 연 명령 프롬프트(cmd)에서 실행합니다.
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
설치되었는지 확인하려면 cmd에서
```
choco
```
를 실행해서 choco 사용법이 뜨는지 확인합니다.  

그 다음엔 choco를 사용해서 Meteor를 다운받아야 합니다. 아래 명령어를 관리자 권한으로 연 cmd에서 실행시켜 Meteor를 설치합니다.
```
choco install meteor 
```
cmd에서 
```
meteor
```
를 실행하여 meteor가 잘 설치되었는지 확인한다.

이제 프로젝트 저장소를 다운받기 위해서 github desktop을 설치해야 한다.  
[Github Desktop 홈페이지](https://desktop.github.com/)에서 설치 파일을 실행하자.  
설치가 완료되면 github 아이디로 로그인하고, pebble-demo 저장소(repo)를 찾아서 클론한다.  
(안써봐서 잘 모르겠다. 이후 추가 예정)

클론이 완료되었으면, 프로젝트에서 사용하는 패키지들을 설치하기 위해 cmd를 열고 저장소가 클론된 디렉토리로 이동합니다.
```
meteor npm init
```
을 실행함으로서 필요한 패키지를 다운받을 수 있습니다.

### Linux에서 설치하는 법

 1. Meteor 설치
 2. git 설치
 3. 프로젝트 설치

리눅스를 사용할 정도라면 충분히 혼자서 설치할 수 있을 것이라고 생각하고 생략하겠습니다.

### 실행하는 법

프로젝트가 있는 디렉토리에서
```
meteor
```
를 실행하면 조약돌이 실행됩니다.  
meteor가 사용하고 있는 데이터베이스에 접근하고 싶다면
```
meteor mongo
```
를 실행하면 된다.

## 사용한 것들
 * [Meteor](https://www.meteor.com/)
 * [React](https://reactjs.org/)

## 코딩하기

이 프로젝트의 코딩 스타일은 가급적 [airbnb JS style guide](https://github.com/airbnb/javascript)와 [airbnb React style guide](https://github.com/airbnb/javascript/tree/master/react)를 따르도록 합니다.  

파일 구조에 대한 대략적인 설명은 다음과 같습니다.
 * 웬만한 코드는 전부 /imports에 놓습니다  
 * /imports/ui에는 페이지를 렌더링하는 코드를 놓습니다.
    * 각 페이지 이름(A)에 해당하는 폴더를 만들고, 그 폴더에서 A.jsx만 export되도록 합니다. 
    * 예를 들어, imports/ui/Stream 폴더에서는 Stream.jsx 만 export됩니다.
 * /imports/api에는 DB에 접근하는 코드, 웹에서 데이터를 파싱하는 등의 API코드를 놓습니다.
 * imports/components에는 재사용 가능한 컴포넌트들을 놓습니다.


## 개발
 * 28기 노영훈
 * ~~29기 장준하~~

## Acknowledgement
 * 26기 손태승
 * 27기 정석훈
 * (아이디어 내신 선배분들)