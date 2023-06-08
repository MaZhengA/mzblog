### 一. stash
#### 应用场景：
当你需要commit之后，才能切换分支么，由于情况紧急，你的commit只能写一个“暂存代码”。
#### 命令：
这种时候，你就可以使用stash，就不用那么尴尬了
> git stash

当你修复完之后，切回来本分支，想恢复最近一次的代码需要
> git stash apply

#### 其他命令
```
# 保存当前未commit的代码并备注
git stash save "备注的内容"

# 列出list记录
git stash list

# 删除所有list记录
git stash clear

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近一次的stash
git stash drop

# 应用指定的记录: 例如删除第二条
git stash apply stash@{1}

# 重命名分支(把某个分支名改为main)
git branch -M main
```
### 二. reset --soft
#### 应用场景：
> git reset --soft HEAD^

commit了一次特别尴尬的提交，使用这个命令，可以再次修改重新提交，保持干净的commit记录，和git reset --hard用法一致，功能不一致

### 三. cherry-pick
#### 作用描述：
将已经提交的commit，复制出新的commit应用到别的分支里面

#### 应用场景：
1. 有时候一个组合需求开发到一半，发现其中的一个需求需要先上线，这个时候需要把commit提出来，单独处理
2. 有时开发分支的代码记录被污染了，导致开发分支合并到线上会有问题，这个时候就需要新拉一个分支，然后把commit复制到新的分支

#### 命令：
- 复制单个
> git cherry-pick commitHash
- 复制多个
> git cherry-pick commit1 commit2

上面的命令将两个提交应用到当前分支

> git cherry-pick commit1^..commit3

上面的命令将commit1到commit3这个区间的commit都应用到当前的分支

#### 代码冲突的场景：
1. 当使用区间复制时，发现中间有一次commit出现了代码冲突，这个时候需要解决掉冲突，重新提交到暂存区，然后使用 <font color=#ff502c>cherry-pick --continue</font>,
让 <font color=#ff502c>cherry-pick</font> 继续下去

2. 如果需要退出或放弃流程：
- 放弃：回到操作之前的样子，啥也没发生过
> git cherry-pick --abort
- 退出：保留已经成功的commit，并退出流程
> git cherry-pick --quit

### 四. revert
#### 命令：
> git revert commitHash

恢复自己的commit提交，保存后增加一个新的提交

### 五. 终端美化工具
1. 安装on-my-zsh工具 2. 安装Powerline修复乱码

### 六. git flow工作流
概念：定义了一整套完善的基于Git分支模型的框架，结合了版本发布的研发流程，适合管理具有固定发布周期的大型项目

分支：
1. master唯一对外发布的分支
2. develop根据master创建出来，用来集成开发完成的各种特性
3. feature根据develop创建出来，gitflow工作流里每个新特性都有自己的feture分支，开发结束后，合并到develop上
4. release当积累够足够多的特性的时候，或到预定发布日期时，从develop创建一个release分支，专门用来做和当前版本发布有关的工作，最终会被合成到master上，
5. hotfix直接根据master分支创建得到的，其目的是为了给运行在生产环境中的系统快速提供补丁，同时确保不会给正在其他上分支进行的工作造成影响，可以合并到master分支和develop分支，以及当前的release分支

工作流程：
1. git flow int对本地项目初始化
2. 执行完第一步，会发现本地除了master，会多出一个develop分支，并且当前分支被切换到了develop
3. git flow feature start 'abc'，会从develop分支创建一个feature/abc的分支，并把当前分支切换到该分支上
4. git flow feature finish 'abc'，把feture/abc合并到develop上，并把此分支从远程库和本地库删除掉，再切换到develop上
5. git flow hotfix start 'fix'，会从master切出一个hotfix/fix分支，并把当前分支切换到此分支，
6. 结束后使用git flow hotfix finish 'fix'，会把hotfix/fix合并到master和develop，然后把此分支从远程库和本地库删除掉，再把当前分支切换成develop
7. 当前版本即将发布时，git flow release start 'def'，从develop创建并切换到一个release/def的分支，做修复bug的工作
8. 发布结束后，git flow release finish 'def'，合并到master分支和develop分支，然后把此分支从远程库和本地库删除掉，再把当前分支切换成develop


### 七. 查看服务器端口是否连通 
nc -vz -w 2 114.116.235.175 8080