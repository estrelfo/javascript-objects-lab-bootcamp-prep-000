var recipes = {
  dick: 'big dick',
  dog: 'whateva'
};

function updateObjectWithKeyAndValue (object, key, value)
{
  var newObj;
  return Object.assign(newObj, key, value);
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key)
{
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}




