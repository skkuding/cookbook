# WSL 설치 가이드

> 이 가이드는 공식 가이드를 참고해서 풀어 쓴 내용입니다.
> https://learn.microsoft.com/ko-kr/windows/wsl/install

## 요구 사항

WSL을 사용하려면 Windows 10 버전 2004 이상 또는 Windows 11을 실행해야 합니다.

## 설치 방법

### 1. 관리자 모드에서 PowerShell 실행

시작 메뉴에서 `Windows PowerShell`을 검색하고, `관리자 권한으로 실행`을 클릭합니다.

### 2. WSL 사용 설정

아래 명령어를 입력하여 WSL 사용을 설정합니다.

```powershell
wsl --install
```

이후 컴퓨터를 다시 시작합니다.

### 3. Linux 배포판 설치

아래 명령어를 입력하여 사용 가능한 Linux 배포판을 확인합니다.

```powershell
wsl --list --online
# 또는
wsl -l -o
```

다음 명령어로 원하는 배포판을 설치합니다.

```powershell
wsl --install -d <배포판 이름>
```

이후 `wsl` 명령어를 입력하면 Linux을 사용할 수 있습니다.

## 같이 알면 좋을 것

### Windows Terminal

Windows Terminal은 Windows에서 여러 개의 터미널을 편리하게 사용할 수 있게 해주는 앱입니다. WSL을 사용할 때 함께 쓰는 것을 추천합니다. 스토어에서 Windows Terminal을 검색하여 설치할 수 있습니다.

{{< figure src="https://store-images.s-microsoft.com/image/apps.28865.13926773940052066.16e93a5b-b25f-4aaf-8a38-77375e237879.78e2aeac-6ede-4855-acb1-79a854b5556d?h=1080" alt="Windows Terminal" >}}

### File System

WSL에서는 Windows의 파일 시스템에 접근할 수 있습니다. Windows의 파일 시스템은 `/mnt` 디렉토리에 마운트되어 있습니다. 예를 들어, `C:\Users\skku\Downloads` 디렉토리는 `/mnt/c/Users/skku/Downloads`에 위치합니다.

하지만 작업 파일 등 많이 쓰이는 파일은 WSL의 파일 시스템(예: `/home/skku`)에 저장하는 것을 추천합니다. WSL의 파일 시스템은 Windows의 파일 시스템에 비해 속도가 빠르고, Windows 파일 시스템에 접근할 때 발생하는 문제를 피할 수 있습니다.
