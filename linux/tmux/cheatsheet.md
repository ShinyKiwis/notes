# Detach/Attach from the session 
At the time writting this section, the prefix combination for tmux is:
=> M-Space (Alt-Space)

```bash
// to detach
Prefix + d 

// attach back to the session 
tmux attach

// attach back to target session 
tmux attach -t <session-name>
```
# Named session 
```bash
// create new named session 
tmux new -s <name>

// travel session 
Prefix + s 
```

# Kill session 
```bash
tmux kill-session -t <session-name>

// keybinding for this 
Ctrl + d
```

# Tmux Windows
New tmux window can only be created inside tmux session 

## Creation and Cycling 
```bash
tmux new-window -n <window-name>

// keybinding for this 
Prefix + c

// cycle to next window
Prefix + n 
Prefix + p
Prefix + index 

// to list all current windows 
Prefix + w

// rename a window  
Prefix + ,
```
## Deletion 
```bash
tmux kill-window -t <window-name>
tmux killw -t fried-rice

or simply use ctrl-d

```

# Tmux Panes

## Splitting 
```bash 
// Horizontal 
tmux split-window -h
Prefix + %

// Vertical
tmux split-window -v
Prefix + "
```

## Deletion 
The same just use `ctrl+d`

## Moving between panes 
```bash
Prefix + Up
Prefix + Down
Prefix + Left
Prefix + Right

// Show number of panes
Prefix + q
```

## Resizing panes 
```bash
tmux resize-pane -D 10
tmux resize-pane -U 10
tmux resize-pane -L 10
tmux resize-pane -R 10
```
