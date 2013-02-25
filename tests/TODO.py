#!/usr/bin/env python

"""

  Main administrative tool for backbone_bootsrap.
  Written in Python over bash to eventually incorporate into Django.

"""

import os,sys, subprocess

global_file_include = ('html','md','js','css','py')
global_file_exclude = ('swp','swo','.pyc')
global_tokens = ('TODO:',)

def main():
  valid_args = validate_arguments(sys.argv)
  if not valid_args:
    print_instructions()
  else:
    exec_valid_args(valid_args)

def print_todos():
  parent_dir = os.path.split(os.path.abspath(__file__))[0]
  parent_of_parent_dir = os.path.join(parent_dir,os.pardir)
  for root, dirs, file_list in os.walk(parent_of_parent_dir):
    if ('.git' not in root and 'admin' not in root) and len(file_list) !=0:
      #print root,'\n', dirs,'\n', file_list
      for file_string in file_list:
        # Don't access uninitialized array elements, only access files you want to see, don't access files you don't and don't read this script 
        if len(str.lower(file_string.split('.')[1])) >= 1 and str.lower(file_string.split('.')[-1]) in global_file_include and str.lower(file_string.split('.')[-1]) not in global_file_exclude and file_string != __file__:
          with open(os.path.join(root,file_string),'r') as f:
            for read_line in f.readlines():
              for token in global_tokens:
                if token in read_line:
                  #print file_string, str.lower(file_string.split('.')[-1])
                  print ">>>", read_line.strip()

def validate_arguments(sys_args):

  valid_args = ['-t','--todos']
  parsed_args = ([parsed_arg for parsed_arg in sys_args if parsed_arg in valid_args ])

  if len(sys_args) != 2 or len(parsed_args) != 1: # Only allowing 1 valid arg
    return False                                  # at the momenet
  else:
    return parsed_args 

def exec_valid_args(valid_args):
  valid_operations = {
      '-t':print_todos,
      '--todos':print_todos,
      '-h':print_help,
      '--help':print_help,
  }
  for valid_arg in valid_args:
    valid_operations[valid_arg]()

def print_instructions():
  print """
    Usage as follows: 

      -t (--todos): Print todos
      -h (--help): Gets this help
  """

if __name__ == "__main__":
  main()
