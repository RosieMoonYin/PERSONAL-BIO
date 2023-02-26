//I have installed a library so form handling is simpler!
    import { useForm } from "react-hook-form";
    import { useEffect } from "react";
  
    
    const Form = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          age: 20,
        },
      });
    
      useEffect(() => {
        console.log("rerender");
      });
    
      const onSubmit = (data, event) => {
        console.log(data);
        //add line of code to disply inputs on screen!
        event.target.reset();
      };
    
      return (
        <div className="wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>React hook form:</legend>
    
              <div className="formInput">
                <label>Name</label>
                <input
                  {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 2,
                      message: "Please enter more than 2 characters",
                    },
                  })}
                />
                <span className="errorMsg">{errors.firstName?.message}</span>
              </div>
    
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "This is required",
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                <span className="errorMsg">
                  {errors.email && "Please enter valid email address."}
                </span>
              </div>
    
              <div className="formInput">
                <label>Age</label>
                <input
                  type="number"
                  {...register("age", {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                />
    
                <span className="errorMsg">
                  {errors.age && "Please enter age and valid number."}
                </span>
              </div>
    
              <div className="formInput">
                <label>password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                  })}
                />
                <span className="errorMsg">
                  {errors.password &&
                    "Password should be 8-20 characters and include at least 1 capital letter, 1 number and 1 special character!"}
                </span>
              </div>
    
              <div className="formInput">
                <label>Gender</label>
                <select {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
    
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </div>
      );
    };
    
    export default Form;