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