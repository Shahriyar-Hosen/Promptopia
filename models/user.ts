import { Schema, SchemaDefinitionProperty, model, models } from "mongoose";

export interface IUser extends Document {
  id: string;
  email: SchemaDefinitionProperty<string>;
  username: SchemaDefinitionProperty<string>;
  image: string;
}

const userSchema = new Schema<IUser>({
  id: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    require: [true, "Email is required!"],
  },
  username: {
    type: String,
    require: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
