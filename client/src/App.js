import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root:{
    width:'100%',
    marginTop:theme.spacing(3),
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  },
  progress : {
    margin: theme.spacing(2)
  }
})

/*
life cycle
1) constructor()
2) componentWillMount()
3) render()
4) componentDidMount()
*/

/*
props or state => shouldComponetUpdate()
*/

class App extends Component{
  /*state = {
    customers: "",
    completed:0
  }*/

  constructor(props){
    super(props);
    this.state = {
      customers : '',
      compleated: 0
    }
  }

  stateRefresh = () =>{
    this.setState({
      customers:'',
      completed : 0
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));    
  }

  componentDidMount(){
    this.timer = setInterval(this.progess , 20)
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progess = () =>{
    const {completed} = this.state;
    this.setState({completed: completed >=100 ? 0 : completed + 1});
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <table className={classes.table}>
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>설정</TableCell>
            </TableHead>
            <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return(<Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
            }) : 
            <TableRow>
              <TableCell coslpan="6" align="center">
                <CircularProgress className={classes.progess} variant="determinate" value={this.state.completed} />  
              </TableCell>  
            </TableRow>
            }
            </TableBody>
          </table>

        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App) ;
