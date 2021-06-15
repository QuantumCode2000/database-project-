import './App.css';
import "../node_modules/bulma/css/bulma.css";
function App() {
  return (
    <div className="App">
      <div className="container-form">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input"/>
          </div>
        </div>

        <div class="field">
          <label class="label">CI</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="number" placeholder="Text input"  />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">tipo de cuenta</label>
          <div class="control">
            <div class="select">
              <select>
                <option>cliente</option>
                <option>empleado</option>
                <option>administrador</option>  
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">descripcion</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>   
        </div> 
</div>
  );
}

export default App;
