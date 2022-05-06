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

