// eslint-disable-next-line max-classes-per-file
import { Component } from "react";

interface AppProps {
  userId: number;
}
interface AppState {
  user: Root | null;
}

class Hello extends Component<AppProps, AppState> {
  state: AppState = {
    user: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    this.getUser(userId);
  }

  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>
  ) {
    const { userId } = this.props;
    if (prevProps.userId !== userId && !(userId % 2)) {
      this.getUser(userId);
    }
  }

  getUser(id = 1) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => this.setState((s) => ({ ...s, user: json })));
  }

  render() {
    const { userId } = this.props;
    const { user } = this.state;
    return (
      <div className="grow basis-2/4">
        <div>{userId}</div>
        <div>{user?.name}</div>
      </div>
    );
  }
}

class Classes extends Component<ClassesProps, ClassesState> {
  state = {
    userId: 1,
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState((s) => ({ ...s, users: json }));
      });
  };

  handlerClick = (id: number) => {
    this.setState((s) => ({ ...s, userId: id }));
  };

  render() {
    const { users, userId } = this.state;
    return (
      <div>
        Classes components
        <div className="flex fle">
          <div className="grow basis-2/4" data-testid="Templatename">
            {userId} <br />
            {users.map((i: Root) => (
              <div key={i.id}>
                <span>{i.id}</span>
                <span
                  onClick={() => this.handlerClick(i.id)}
                  className="cursor-pointer"
                >
                  {i.name}
                </span>
              </div>
            ))}
          </div>
          <Hello userId={userId} />
        </div>
      </div>
    );
  }
}
export interface Root {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ClassesProps {}
interface ClassesState {
  userId: number;
  users: Root[];
}

export default Classes;
