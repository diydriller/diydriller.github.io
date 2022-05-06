---
title: 여러개의 GIT 계정 사용하기
slug : git1
---

# 여러개의 GIT 계정 사용하기

## 개요
하나의 컴퓨터에서 여러개의 GIT 계정을 사용해서 작업하고자 하는 경우 이 내용을 적용하면 된다. 보통 GIT 계정은 자격증명관리자에 저장되어서 사용되는데 1개의 계정만 사용가능하다. 이때 SSH를 사용해서 GIT 서버와 통신하면 여러개의 GIT 계정을 사용할 수 있다.

## 1. SSH key 생성
SSH를 사용하는 경우 GIT 서버와 비대칭키 방식으로 통신하므로 GIT 서버는 SSH 공개키가 필요하다. SSH 키를 저장할 .ssh라는 디렉토리를 홈디렉토리안에 만들고 ssh-keygen이라는 프로그램으로 각 계정별로 공개키와 개인키를 생성한다. 이후 GITHUB에서 Settings > SSH and GPG keys > SSH keys에 들어가서 앞서 만든 공개키를 등록한다.

``` bash
    # 개인 계정
    ssh-keygen -t rsa -C {personal git email}
    # 회사 계정
    ssh-keygen -t rsa -C {company git email}
```

## 2. GIT 계정 설정파일
.ssh 폴더 안에 config라는 파일을 만들고 계정별로 사용할 개인키를 지정해준다.

``` bash
    # 개인 계정
    Host {personal git host name}
    HostName github.com
    User git
    IdentityFile ~/.ssh/{personal git private key name}
        
    # 회사 계정
    Host {company git host name} 
    HostName github.com
    User git
    IdentityFile ~/.ssh/{company git private key name}
```

## 3. GIT 서버와 통신
``` bash
    # git 서버와 SSH 통신 테스트
    ssh -T {git host name}

    # git remote repository 등록
    git remote add origin git@{git host name}:{git repository name}
```

## SSH Agent로 key 저장
GIT 서버에 요청을 보낼때마다 key 생성시 입력한 비밀번호를 입력해야 하는데 SSH Agent를 사용해서 비밀번호를 저장하면 매번 입력할 필요없다.

``` bash
    # ssh-agent 실행
    eval "$(ssh-agent -s)"
    # ssh key 조회
    ssh-add -l
    # ssh key 저장
    ssh-add ~/.ssh/{git private key}
```

## 폴더별 GIT 계정 연동
앞에서 GIT 계정별로 GIT 서버와 통신하는 경우를 봤다면 로컬에서 작업할때 폴더별로 GIT 계정을 연동할 수 있다. home 디렉토리의 .gitconfig 파일을 수정해준다. 

``` bash
    # .gitconfig 파일
    [user]
        email = {personal git email}
        name = {personal git username}
    [includeIf "gitdir:{company 작업 폴더 경로}"]
    path = .gitconfig-comapny

    # .gitconfig-company 파일
    [user]
        email = {company git email}
        name = {company git username}
```







